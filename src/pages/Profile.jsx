import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import { get, axiosDelete } from "../services/authService";

const Profile = () => {
  const [myComparisons, setMyComparisons] = useState([]);
  const { user } = useContext(AuthContext);

  const getComparisons = () => {
    get("/comparisons/my-comparisons")
      .then((response) => {
        console.log("My comparisons", response.data);
        setMyComparisons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeComparison = (comparisonId) => {
    axiosDelete(`/comparisons/delete/${comparisonId}`)
      .then((response) => {
        console.log("Deleted comparison", response.data);
        getComparisons();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComparisons();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      <h2>My Comparisons</h2>

      <>
        {myComparisons.length > 0 && (
          <>
            {myComparisons.map((comparison) => {
              return (
                <div
                  key={comparison._id}
                  style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to={`/my-comparison/${comparison._id}`}>
                    <h3>
                      Comparison between {comparison.player1.firstname}{" "}
                      {comparison.player1.lastname} &{" "}
                      {comparison.player2?.firstname}{" "}
                      {comparison.player2?.lastname}
                    </h3>
                  </Link>

                  <button onClick={() => removeComparison(comparison._id)}>
                    Delete Comparison
                  </button>
                </div>
              );
            })}
          </>
        )}
      </>
    </div>
  );
};

export default Profile;
