import React from "react";
import "./about.css";
// import ME from "../../assets/dtgk-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { GiOpenFolder } from "react-icons/gi";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name
   
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
                <div>
                The Academy Awards, better known as the Oscars,[1] are awards for artistic and technical merit for the American film industry. 
                </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const About = () => {
  const rows = [
    createData('The Movie'),
    createData('Nation'),
    createData('oscar'),
  ];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={""} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3rd student</small>
            </article>
            <article className="about__card">
              <TbSchool className="about__icon" />
              <h5>GPA</h5>
              <small>3.3+ AVG</small>
            </article>
            <article className="about__card">
              <GiOpenFolder className="about__icon" />
              <h5>Project</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
          Hi, I'm Khang, and I'm in my third year of studies towards a bachelor's in Software Engineering at FPT University.
          Courteous and enthusiastic, I am interested in Web programming and Blockchain.
          </p>
          <TableContainer component={Paper} className="about__content coll">
      <Table aria-label="collapsible table">
        <TableHead>
          {/* <TableRow>
            <TableCell />
          </TableRow> */}
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name}  row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         <a href="#contact" className="btn btn-primary ">Let's Talk</a> 
        </div>


  

      </div>
    </section>
  );
};

export default About;
