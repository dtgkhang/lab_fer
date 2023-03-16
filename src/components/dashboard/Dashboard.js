import {
    Form,
    Input,
    Space,
    Checkbox,
    Table,
    Popconfirm,
    Row,
    Col,
    message
  } from "antd";
  import { useFormik } from "formik";
  import { React, useEffect, useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { AddUser, DeleteUser, UpdatePhone } from "../redux/userSlice";
  import * as Yup from "yup";
  import { TextField } from "@mui/material";
  import {
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Switch,
    Typography,
    Button,
    Select,
  } from "@mui/material";
  import "./form.css";
  import Link from "@mui/material/Link";
  import Grid from "@mui/material/Grid";
  import Box from "@mui/material/Box";
  // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import Container from "@mui/material/Container";
  import { createTheme, ThemeProvider } from "@mui/material/styles";
  import Avatar from "@mui/material/Avatar";
  import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
  
  const theme = createTheme();
  export default function Dashboard() {
    const [movies,setMovies] = useState([]);
    const getMoives = async () => {
      try {
          const response = await axios.get("https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie")
          console.log(response);
  
          if (response.data) {
            console.log(response.data);
            setMovies(response.data)

          } else {
            message.success("Đang load data");
  
          }
      } catch (err) {
        message.success("Đang load data");
  
      }
  };
  const createMovies = async (values) => {
    try {
        const response = await axios.post("https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie",values)
        console.log(response);

        if (response.data) {
          console.log(response.data);
          message.success("Thêm Thành Công");

        } else {
            message.error("Thêm thất bại");

        }
    } catch (err) {
        message.error("Thêm thất bại");

    }
};
const deletaMovie = async (id) => {
    try {
        const response = await axios.delete(`https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie/${id}`)
        console.log(response);

        if (response.data) {
          console.log(response.data);
        } else {
            // message.error(response.data.message);

        }
    } catch (err) {
        // message.error(err.message);

    }
};
  useEffect(() => {

    getMoives();

},[]);

    const formik = useFormik({
      initialValues: {
        Title: "",
        Year: "",
        Image: "",
        boxOffice: 0,
        data: "",
        agree: false,
      },
      onSubmit: (values) => {
        console.log(values);
        createMovies(values)
      },
      validationSchema: Yup.object({
        Title: Yup.string()
          .required("Required.")
          .min(2, "Must be 2 characters or more"),
          Image: Yup.string()
          .required("Required.")
          .min(2, "Must be 2 characters or more"),
        Year: Yup.number().integer().typeError("Please enter a valid number"),
        boxOffice: Yup.number().integer().typeError("Please enter a valid number"),

        data: Yup.string()
          .required("Required.")
          .min(10, "Must be 10 characters or more"),
        agree: Yup.boolean().oneOf(
          [true],
          "The terms and conditions must be accepted."
        ),
      }),
    });
  
    //handle table
    // const userList = useSelector((state) => state.user.user);
    const [newPhone, setNewPhone] = useState(0);
  
    const [searchedText, setSearchedText] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const handleChange = (pagination, filters, sorter, search) => {
      console.log("Various parameters", pagination, filters, sorter, search);
      setFilteredInfo(filters);
    };
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id > b.id,
        // sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: "Title",
        dataIndex: "Title",
        key: "Title",
        sorter: (a, b) => a.Title.length - b.Title.length,
        filteredValue: [searchedText],
  
        // sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      },      {
        title: "Image",
        dataIndex: "Image",
        key: "Image",
      },
      {
        title: "Year",
        dataIndex: "Year",
        key: "Year",
      },
    //   {
    //     title: "subject",
    //     dataIndex: "subject",
    //     key: "subject",
    //     filters: [
    //       {
    //         text: "PRJ",
    //         value: "PRj"
    //       },
    //       { text: "SE", value: "SE" },
    //       { text: "IA", value: "IA" },
    //       { text: "IS", value: "IS" },
    //     ],
  
    //     ellipsis: true,
    //     filteredValue: filteredInfo.subject || null,
    //     onFilter: (value, record) => record.subject === value,
    //   },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (_, id) => (
          <>
            <Popconfirm
              className="p-2"
              title="Sure to change?"
            //   onConfirm={() =>
            //     dispatch(UpdatePhone({ id: id.id, phone: newPhone }))
            //   }
            >
              <a>Update</a>
            </Popconfirm>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deletaMovie(id.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </>
        ),
      },
    ];
  
    return (
      <Row className="mt-5">
        <Col lg={8} xs={24} sm={24}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className="card p-2">
              <CssBaseline />
              <Typography component="h1" variant="h5">
                Add contact
              </Typography>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <form className="form p-2 m-2" onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Title"
                        name="Title"
                        value={formik.values.Title}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    {formik.errors.Title && (
                      <Typography variant="caption" color="red">
                        {formik.errors.Title}
                      </Typography>
                    )}
                    <Grid item xs={12}>
                      <TextField
                        label="Year"
                        name="Year"
                        fullWidth
                        value={formik.values.Year}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    {formik.errors.Year && (
                      <Typography variant="caption" color="red">
                        {formik.errors.Year}
                      </Typography>
                    )} <Grid item xs={12}>
                    <TextField
                      label="Image URL"
                      name="Image"
                      fullWidth
                      value={formik.values.Image}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  {formik.errors.Image && (
                    <Typography variant="caption" color="red">
                      {formik.errors.Image}
                    </Typography>
                  )}
                    <Grid item xs={12}>
                      <TextField
                        label="Box Office"
                        name="boxOffice"
                        fullWidth
                        value={formik.values.boxOffice}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    {formik.errors.boxOffice && (
                      <Typography variant="caption" color="red">
                        {formik.errors.boxOffice}
                      </Typography>
                    )}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Detail"
                        multiline
                        name="data"
                        rows={4}
                        value={formik.values.data}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Typography variant="caption" color="red">
                      {formik.errors.data}
                    </Typography>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch />}
                        label="Agree to terms and conditions."
                        name="agree"
                        value={formik.values.agree}
                        onClick={formik.handleChange}
                      />
                    </Grid>
                    {formik.errors.agree && (
                      <Typography variant="caption" color="red">
                        {formik.errors.agree}
                      </Typography>
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Send
                    </Button>
                  </Grid>
                </form>
              </Box>
            </Container>
          </ThemeProvider>
        </Col>
        <Col lg={16} xs={24} sm={24}>
          {/* <Button onClick={setNameSort}>Sort Name</Button> */}
          <Input.Search
            placeholder="Search here..."
            onSearch={(value) => {
              setSearchedText(value);
            }}
          />
          <Table
            scroll={{
              x: 500,
              y: 800,
            }}onChange={handleChange}
            rowkey={(movies) => movies.id} 
                      columns={columns}
            dataSource={movies}
            expandable={{
              expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.data}</p>,
            }}
        
          />
        </Col>
      </Row>
    );
  }
  