import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Parent() {
  const [inputt, setInput] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = (index) => {
    setShow(!show);
    setId(index);
  };

  const fetchApi = () => {
    axios
      .get("https://api.pedmax.com/api/v1/countries?sport_id=9")
      .then((res) => {
        const total_data = res.data.countries;
        console.log(total_data);
        setInput(total_data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ul>
      {inputt.map((data) => {
        const value = data.tournaments;
        return (
          <>
            <li
              key={data.id}
              className="parent_list_1"
              onClick={() => handleClick(data.id)}
            >
              {data.name}
            </li>
            {id === data.id && show && (
              <>
                {value.map((ele) => {
                  return (
                    <Link to={{ 
                        pathname: `/home/${ele.id}`, 
                        state: {
                            id : ele.id,
                            title : ele.title,
                            uid : ele.uid,
                            matches : ele.number_of_matches,
                            rank : ele.rank
                        } 
                       }}>
                      <li className="parent_list_2" key={ele.id}>
                        {ele.title}
                      </li>
                    </Link>
                  );
                })}
              </>
            )}
          </>
        );
      })}
    </ul>
  );
}

export default Parent;
