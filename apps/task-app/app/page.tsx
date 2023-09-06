"use client";

/*
 *     FRAMEWORK
 */
import { useEffect, useState, Fragment } from "react";
import dynamic from "next/dynamic";
/*
 *     COMPONENTS
 */
import { Button, Accordion, Separator, Input, RepositoryView } from "ui";
import "ui/dist/Button/Button.css";
import "ui/dist/Accordion/Accordion.css";
import "ui/dist/Input/Input.css";
import "ui/dist/RepositoryView/RepositoryView.css";
/*
 *     STYLES
 */
import styles from "./page.module.css";
/*
 *     GITHUB
 */
import { Octokit } from "octokit";
/*
 *     STATE MANAGEMENT
 */
import { useAtom } from "jotai";
import {
  Repository,
  loggedInUserAtom,
  repositoriesAtom,
  userSearchResultsAtom,
  userSearchTextAtom,
} from "./state";

const Home = () => {
  const [isInitialized, setIsInitialized] = useState<boolean | undefined>(
    undefined
  );

  const [loggedInUser, setLoggedInUser] = useAtom(loggedInUserAtom);
  const [userSearchText, setUserSearchText] = useAtom(userSearchTextAtom);
  const [userSearchResults, setUserSearchResults] = useAtom(
    userSearchResultsAtom
  );
  const [repositories, setRepositories] = useAtom(repositoriesAtom);

  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  const onChangeSearch = (value: string) => {
    setUserSearchText(value);
  };

  const onClickSearch = async () => {
    if (userSearchText === undefined || userSearchText === "") return;

    const userSearchResponse = await octokit.rest.search.users({
      q: userSearchText,
    });
    console.log("userSearchResponse ", userSearchResponse);

    let users = userSearchResponse.data.items;
    if (users.length > 5) users = users.slice(0, 5);
    setUserSearchResults(
      users.map((item) => ({
        id: item.id,
        name: item.login,
      }))
    );

    console.log("userSearchResponse ", userSearchResponse);
  };

  const onClickAccordion = async (isOpen: boolean, username: string) => {
    if (isOpen === false) return;

    const repositoriesReponse = await octokit.rest.repos.listForUser({
      username,
    });
    console.log("repositoriesReponse ", repositoriesReponse);

    const newRepositories: Repository[] = repositoriesReponse.data.map(
      (item) => ({
        username: username,
        id: item.id,
        name: item.name,
        description: item.description ?? "",
        stars: item.stargazers_count ?? 0,
      })
    );
    const diffRepositories = newRepositories.filter(
      (newRepo) =>
        repositories.find((repo) => repo.id === newRepo.id) === undefined
    );
    console.log("diffRepositories ", diffRepositories);

    setRepositories([...repositories, ...diffRepositories]);
  };

  const init = async () => {
    console.debug("env vars: ", process.env.GITHUB_PERSONAL_ACCESS_TOKEN);

    const getAuthenticatedResponse =
      await octokit.rest.users.getAuthenticated();
    console.log("getAuthenticatedResponse ", getAuthenticatedResponse);

    const { data } = getAuthenticatedResponse;
    setIsInitialized(true);

    const newLoggedInUser = {
      id: data.id,
      name: data.login,
    };
    setLoggedInUser(newLoggedInUser);
    setUserSearchText(newLoggedInUser.name);
  };

  useEffect(() => {
    if (isInitialized !== undefined) return;
    setIsInitialized(false);

    const serverRendering = typeof window === "undefined";
    if (serverRendering) return;

    init();
  }, [isInitialized]);

  if (!isInitialized) {
    return <div>Initializing...</div>;
  }

  return (
    <main className={styles.main}>
      <Input
        placeholder="Enter username"
        value={userSearchText}
        onChange={onChangeSearch}
      />
      <Separator kind="vertical" size="10px" />

      <Button primary label="Search" onClick={onClickSearch} />
      <Separator kind="vertical" size="10px" />

      {Array.isArray(userSearchResults) && (
        <div className="users">
          <div>Showing users for "{userSearchText}"</div>

          {userSearchResults.map((user) => (
            <Fragment key={user.name}>
              <Accordion
                title={user.name}
                onClick={(isOpen) => onClickAccordion(isOpen, user.name)}
              >
                {repositories
                  .filter((repo) => repo.username === user.name)
                  .map((repo) => (
                    <RepositoryView key={repo.id} repository={repo} />
                  ))}
              </Accordion>
              <Separator kind="vertical" size="10px" />
            </Fragment>
          ))}
        </div>
      )}
    </main>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
