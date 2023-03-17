import {
  Form,
  Input,
  Space,
  Checkbox,
  Table,
  Popconfirm,
  Row,
  Col,
  message,Button
} from "antd";
import { useFormik } from "formik";
import {  useEffect, useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { AddUser, DeleteUser, UpdatePhone } from "../redux/userSlice";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import {
  FormControlLabel,
  Switch,
  Typography,

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
import UpdateModal from "../UpdateModal";
import React from "react";

const theme = createTheme();
export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const getMoives = async () => {
    try {
      const response = await axios.get(
        "https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie"
      );
      console.log(response);

      if (response.data) {
        console.log(response.data);
        setMovies(response.data);
      } else {
        message.success("Đang load data");
      }
    } catch (err) {
      message.success("Đang load data");
    }
  };
  const createMovies = async (values) => {
    try {
      const response = await axios.post(
        "https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie",
        values
      );
      console.log(response);

      if (response.data) {
        console.log(response.data);
        setRefreshKey(oldKey => oldKey +1)

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
      const response = await axios.delete(
        `https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie/${id}`
      );
      console.log(response);

      if (response.data) {
        console.log(response.data);
        setRefreshKey(oldKey => oldKey +1)
      } else {
        // message.error(response.data.message);
      }
    } catch (err) {
      // message.error(err.message);
    }
  };
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    getMoives();
  }, [refreshKey]);
  const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
const YearVal =/^(19|20)\d{2}$/

  const formik = useFormik({
    initialValues: {
      Title: "",
      Year: 0,
      Image: "",
      boxOffice: 0,
      Nation:"",
      trailer:"",
      data: "",
      agree: false,
    },
    onSubmit: (values,{ resetForm }) => {
      console.log(values);
      createMovies(values);
      resetForm();
    },
    validationSchema: Yup.object({
      Title: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
        Nation: Yup.string()
        .required("Required.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
        .min(2, "Must be 2 characters or more"),
      Image: Yup.string()
        .required("Required.")
        .matches(URL, 'Enter a valid url')
    , 
    trailer: Yup.string()
    .required("Required.")
    .matches(URL, 'Enter a valid url')
, 
    Year: Yup.string().matches(YearVal, 'Enter a valid year')        .required("Required.")

,
      boxOffice: Yup.number()
        .integer()
        .typeError("Please enter a valid number"),

      data: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (record) => {
    console.log(record);
    setmodaldata(record);
    setIsModalOpen(true);

  };


  const handleOk = () => {
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [modaldata, setmodaldata] = useState([]);

  //handle table
  // const userList = useSelector((state) => state.user.user);
  const [newPhone, setNewPhone] = useState(0);

  const  [searchedText, setSearchedText] = useState([]);
  const [filteredInfo, setFilteredInfo]  = useState({});
  const handleChange = (pagination, filters, sorter, search) => {
    console.log("Various parameters", pagination, filters, sorter, search);
    setFilteredInfo(filters);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  });
 
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      // sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
      filteredValue: [searchedText],
      // onFilter: (value:string, record) => record.Title.includes(value),


      // sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: "Image",
      dataIndex: "Image",
      key: "Image",
    render:  (_,record) => <img src={record.Image} width={50}/>

    },
    {
      title: "Year",
      dataIndex: "Year",
      key: "Year",
    },    {
      title: "nation",
      dataIndex: "Nation",
      key: "Nation",
    },
    {
        title: "Box Office",
        dataIndex: "boxOffice",
        key: "boxOffice",
        sorter: (a, b) => a.boxOffice - b.boxOffice,

        render:  (_,record) => <p>{formatter.format(record.boxOffice)} </p>

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
      render: (_, record) => (
        <>
        <Button type="primary" onClick={() => showModal(record)}>
          Edit
        </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => deletaMovie(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>

        </>
      ),
    },
  ];
  // format price


  return (
    <Row className="mt-5  ">
      <Col lg={8} xs={24} sm={24}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className="card p-2">
            <CssBaseline />
            <Typography component="h1" variant="h5">
              Add Movie
            </Typography>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <form className="p-2 m-2" onSubmit={formik.handleSubmit}>
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
                  )}
                                    <Grid item xs={12}>
                    <TextField
                      label="Nation"
                      name="Nation"
                      fullWidth
                      value={formik.values.Nation}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  {formik.errors.Nation && (
                    <Typography variant="caption" color="red">
                      {formik.errors.Nation}
                    </Typography>
                  )}
                  <Grid item xs={12}>
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
                      label="trailer emb URL"
                      name="trailer"
                      fullWidth
                      value={formik.values.trailer}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  {formik.errors.trailer && (
                    <Typography variant="caption" color="red">
                      {formik.errors.trailer}
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
                                    <Grid item xs={12}>
                                    <Button
                    // type="submit"
                    // fullWidth
                  >
                    Send
                  </Button>
</Grid>
                  
                </Grid>
              </form>
            </Box>
          </Container>
        </ThemeProvider>
      </Col>
      <Col lg={16} xs={24} sm={24}>
        {/* <Button onClick={setNameSort}>Sort Name</Button> */}
        <Input.Search
        className="container mt-2"
          placeholder="Search here..."
          onSearch={(value) => {
            setSearchedText(value);
          }}
        />
        <Table className="container"
          scroll={{
            x: 800,
            y: 800,
          }}
          onChange={handleChange}
          rowKey="id"
          columns={columns}
          dataSource={movies}
          expandable={{
            expandedRowRender: (record) => (
              <Row>
                <Col lg={8} xs={10} sm={12}>
{record.trailer&&             <iframe style={{width:"100%"}} height="315" src={record.trailer} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
}
                  {/* <img src={record.Image} width={200} /> */}
                </Col>
                <Col lg={16} xs={24} sm={16}>
                     
                  {record.data}
                </Col>
              </Row>
            ),
          }}
        />
      </Col>
      <UpdateModal     isModalOpen={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel} record={modaldata}
      setRefresh={setRefreshKey} setIsModalOpen={undefined}
          />
    </Row>
  );
}
