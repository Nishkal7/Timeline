import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const numberOfPages  = useSelector((state) => state.posts.numberOfPAges);
  const stat  = useSelector((state) => state);
  const Classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [dispatch,page]);

  return (
    <Pagination
      classes={{ ul: Classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
