import React, { useState } from "react";
import { sortRepos } from "../utils/sorter";
import { Row, Col, Form } from "react-bootstrap";
import { timeSince } from "../utils/timeAgo";

export interface Repository {
  owner: {
    login: string;
  };
  name: string;
  id: string;
  updated_at: string;
}

export interface Repositories {
  repos: Repository[];
}

function RepoList({ repos }: Repositories) {
  const [sortBy, setSortBy] = useState("stars");

  const sortedRepos = sortRepos(repos, sortBy);

  const firstPartArray = sortedRepos.slice(0, (sortedRepos.length + 1) / 2);
  const secondPartArray = sortedRepos.slice((sortedRepos.length + 1) / 2);

  return (
    <>
      <Row className="mt-3 pt-3 px-2 mx-1 rounded-top-3 background-500 animated fadeInUp">
        <Col sm={8}>
          <h2 className="normalize-text-color">Repository List</h2>
        </Col>
        <Col className="d-flex align-items-center" sm={4}>
          <label htmlFor="sortSelect" className="w-50 text-center normalize-text-color">
            Sort By:
          </label>
          <Form.Select
            className="background-700"
            value={sortBy}
            id="sortSelect"
            onChange={(e) => setSortBy(e.target.value)}
            style={{ borderColor: "var(--blue-300)" }}
          >
            <option value="stars">Most Stars</option>
            <option value="starsAsc">Least Stars</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="py-4 mb-5 mx-1 px-2 rounded-bottom-3 background-500 animated fadeInUp">
        <Col md={6}>
          <ul className="list-group">
            {firstPartArray.map((repo) => (
              <a
                href={`/repo/${repo.owner.login}/${repo.name}`}
                className="d-flex justify-content-between align-items-center list-group-item background-500"
                style={{ borderColor: "var(--blue-300)" }}
                key={repo.id}
              >
                <span className="fs-5">{repo.name}</span>
                <span className="text-blue">{timeSince(new Date(repo.updated_at).getTime())} ago</span>
              </a>
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <ul className="list-group">
            {secondPartArray.map((repo) => (
              <a
                href={`/repo/${repo.owner.login}/${repo.name}`}
                className="d-flex justify-content-between align-items-center list-group-item background-500"
                style={{ borderColor: "var(--blue-300)" }}
                key={repo.id}
              >
                <span className="fs-5">{repo.name}</span>
                <span className="text-blue">{timeSince(new Date(repo.updated_at).getTime())} ago</span>
              </a>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default RepoList;
