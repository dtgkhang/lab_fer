import React from 'react'
import {message, Modal} from 'antd'
import {createRoutesFromChildren, useNavigate} from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {TextField,
    FormControlLabel,
    Switch,
    Typography,
    Button,
  } from "@mui/material";
  import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";
function UpdateModal({isModalOpen,handleOk,handleCancel,record,setIsModalOpen,setRefresh}) {
    const theme = createTheme();
 const navigate =useNavigate();
 const updateMovie = async (values) => {
    try {
      const response = await axios.put(
        `https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie/${record.id}`,
        values
      );
      console.log(response);

      if (response.data) {
        console.log(response.data);
        message.success("Update Thành Công");
        setRefresh(oldKey => oldKey +1)

        setIsModalOpen = false;
      } else {
        message.error("Update thất bại");
      }
    } catch (err) {
      message.error("Update thất bại");
    }
  };
  const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  const YearVal =/^(19|20)\d{2}$/

    const formik = useFormik({
      initialValues: {
        Title: "",
        Year: "",
        // Image: record.Image,
        boxOffice: "",
        Nation:"",
        // trailer:record.trailer,
        data: '',
      },
        onSubmit: (values,{ resetForm }) => {

            setRefresh(oldKey => oldKey +1)
          console.log(values);
          updateMovie(values);
          resetForm()


        },
        validationSchema: Yup.object({
          Title: Yup.string()        .required("Required.")

            .min(2, "Must be 2 characters or more"),
            Nation: Yup.string()        .required("Required.")   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")

            .min(2, "Must be 2 characters or more"),
    //       Image: Yup.string()
    //         .matches(URL, 'Enter a valid url')
    //     , 
    //     trailer: Yup.string()
    //     .matches(URL, 'Enter a valid url')
    // , 
        Year: Yup.string().matches(YearVal, 'Enter a valid year')            .required("Required.")
   
    
    ,
          boxOffice: Yup.number().required("Required.").integer()
            .typeError("Please enter a valid number"),
    
          data: Yup.string().required("Required.")

            .min(10, "Must be 10 characters or more"),

        }),
      });
    
        return (
        <Modal  width={600} title="Update movie" footer={null}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}   setRefresh={setRefresh}
        >
           <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className=" ">
            <CssBaseline />
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
                  {/* <Grid item xs={12}>
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
                  </Grid> */}
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

                  {formik.errors.agree && (
                    <Typography variant="caption" color="red">
                      {formik.errors.agree}
                    </Typography>
                  )}
                                    <Grid item xs={12}>
                                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Send
                  </Button>
</Grid>
                  
                </Grid>
              </form>
            </Box>
          </Container>
        </ThemeProvider>
        </Modal>
    )
}

export default UpdateModal