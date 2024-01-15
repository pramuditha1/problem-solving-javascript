import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [pageSize, setPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedViewData, setPaginatedViewData] = useState([]);

  //initial page load sideeffects
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //useEffect to set paginated data on click
  useEffect(() => {
    //splice the original data set array with selected page start and end indexes
    const indexOfLastTodo = currentPage * pageSize;
    const indexOfFirstTodo = indexOfLastTodo - pageSize;
    setPaginatedViewData(fetchedData.slice(indexOfFirstTodo, indexOfLastTodo));
  }, [pageSize, currentPage, fetchedData]);

  // get number of pages needed and round up to next integer.
  //ex: if value = 4.3 it will round to 5
  const pages = Math.ceil(fetchedData.length / pageSize);
  //create pages array
  const arrPages = Array.from({ length: pages }, (_, index) => index + 1);

  const setPaginatedDataSet = (e) => {
    const selectedPage = e.target.textContent;
    //regex returns an array, hence we need to extract first index to get the number value
    setCurrentPage(selectedPage.match(/\b\d+\b/)[0]);
  };

  return (
    <div>
      <h1>Pagination</h1>
      {paginatedViewData.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
      {arrPages &&
        arrPages.map((page) => {
          return (
            <span key={page} onClick={setPaginatedDataSet}>
              {`${page}`} |{" "}
            </span>
          );
        })}
    </div>
  );
};

export default Pagination;
