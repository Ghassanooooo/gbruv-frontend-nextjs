import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { backendApiURL } from '../../baseApiURL';
/*
const UserCard = ({ icon, title, bio, username }) => (
  <Card
    className="UserCard"
    image={icon && icon}
    header={username && username}
    meta={title && title}
    description={bio && bio}
  />
);*/
export default function index(props) {
  const { page } = props;
  const [users, setUsers] = useState();
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const errorsHandler = error => {
    if (error.response) {
      setLoading(false);
      setErrors({
        errors: {
          ...error.response.data,
          statusText: error.response.statusText,
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });

      console.log({ ...error.response });
    }
  };

  const findUsers = async () => {
    try {
      const productsData = await Axios(`${backendApiURL}users/admin-users`);
      setUsers(productsData.data);
      //  console.log("findUsers ======> ", productsData);
    } catch (ex) {
      setLoading(false);
      errorsHandler(ex);
    }
  };
  useEffect(() => {
    findUsers();
  }, [findUsers]);

  return (
    <section className="compare-area ptb-60">
      <div className="container">
        <div className="section-title">
          <h2>
            <span className="dot" /> {page.title}
          </h2>
        </div>
        <p>{page.description}</p>
        <div
          className="products-details-tab-content"
          dangerouslySetInnerHTML={{
            __html: page.productReview,
          }}
        />
      </div>
    </section>
  );
}

/**
 <Grid columns="3" stackable centered>
          <Grid.Row>
            {!!users &&
              users.length > 0 &&
              users.map(user => (
                <Grid.Column>
                  <UserCard {...user} />
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
 */
