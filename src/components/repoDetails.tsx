import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepoDetails } from "../services/github";
import { Star } from "phosphor-react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Loader } from "./loader";
import { GoTo } from "./goTo";

function RepoDetails() {
  const { owner, repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(undefined);

  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await getRepoDetails(`${owner}/${repoName}`);
      setRepoDetails(repoData);
    };

    fetchRepos();
  }, [owner, repoName]);

  return repoDetails ? (
    <Container fluid="sm" className="animated fadeInUp" style={{ minHeight: "100vh", maxWidth: 800 }}>
      <GoTo />
      <Row className="m-3 p-4 mx-1 rounded-3 background-500">
        <Col sm="12">
          <h2 className="normalize-text-color">Repository Details</h2>
          <p className="normalize-text-color">Name: {repoDetails.name}</p>
          <p className="normalize-text-color">Description: {repoDetails.description}</p>
          <p className="normalize-text-color d-flex align-items-center gap-1">
            Stars: {repoDetails.stargazers_count} <Star />
          </p>
          {repoDetails.topics?.length > 0 && <p className="normalize-text-color">Topics: {repoDetails.topics.join(", ")}</p>}
          <p className="normalize-text-color">Language: {repoDetails.parent ? repoDetails.parent.language : repoDetails.language}</p>
          <div className="d-flex justify-content-center">
            <Button variant="primary py-2 px-4" href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <Loader />
  );
}

export default RepoDetails;
