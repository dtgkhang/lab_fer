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
import { Link } from "react-router-dom";
function createData(name, content) {
  return {
    name,content
   
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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
                <div>
                {row.content}
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
    createData('The Movie','Giải thưởng Viện Hàn lâm (tiếng Anh: Academy Awards), thường được biết đến với tên Giải Oscar (tiếng Anh: Oscars) là giải thưởng điện ảnh hằng năm của Viện Hàn lâm Khoa học và Nghệ thuật Điện ảnh (tiếng Anh: Academy of Motion Picture Arts and Sciences, viết tắt là AMPAS) (Hoa Kỳ) với 74 giải thưởng dành cho các diễn viên và kỹ thuật hình ảnh trong ngành điện ảnh Hoa Kỳ. Kể từ năm 1929, giải Oscar được trao hàng năm tại thành phố Los Angeles[1] để ghi nhận những thành tựu xuất sắc của điện ảnh trong năm của các đạo diễn, diễn viên, kịch bản và nhiều lĩnh vực khác qua cuộc bỏ phiếu kín của các thành viên Viện Hàn lâm.'),
    createData('History',"Giải thưởng Viện Hàn lâm đầu tiên được trao vào ngày 16 tháng 5 năm 1929, trong một buổi dạ tiệc chiều tại Khách sạn Roosevelt Hollywood với 280 khách mời. Giá trị tấm vé vào thời đó là 5 USD (tương đương 71 USD ngày nay). 15 bức tượng vàng đã được trao cho các diễn viên, đạo diễn và tổ làm phim cho các bộ phim từ năm 1927-1928 và lễ trao giải kéo dài chỉ trong 15 phút. Người chiến thắng lúc ấy được báo trước 3 tháng để chuẩn bị. Nhưng sau đó, dịp trao giải năm 1941 về sau, kết quả được giữ kín trong phong bì và không một ai biết được kết quả ngoại trừ giám đốc và phó giám đốc công ty sản xuất Tượng vàng Oscar R. S Owen."),
    createData('Award',"Phần thưởng của giải Oscar là một bức tượng nhỏ có tên chính thức là Giải thưởng của Viện Hàn lâm cho đóng góp xuất sắc (tiếng Anh: Academy Award of Merit) hay thông thường được biết đến là Tượng vàng Oscar. Bức tượng bao gồm phần gốc bằng kim loại đen được mạ vàng và britannium, cao 34.3 cm và nặng 3,856 kg có hình dáng của một hiệp sĩ được điêu khắc theo phong cách Art Deco, người hiệp sĩ này cầm gươm và đứng trên một cuộn phim có năm cánh. Năm cánh này tượng trưng cho các nhánh gốc của Viện Hàn lâm bao gồm diễn viên, biên kịch, đạo diễn, nhà sản xuất và kỹ thuật viên[6]."),
  ];

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://znews-photo.zingcdn.me/w660/Uploaded/pqmcbzwv/2023_03_02/PGMOE6342ZNWHDLHVV2457MHH4.jpg" alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
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
          </div> */}
          <p>
          Hi, I'm Khang, and I'm in my third year of studies towards a bachelor's in Software Engineering at FPT University.
          Courteous and enthusiastic, I am interested in Web programming and Blockchain.
          </p>
          <TableContainer  className="about__content coll">
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
         <a onClick={()=>{Link("/contact")}} className="btn btn-primary mt-2">Let's Talk</a> 
        </div>


  

      </div>
    </section>
  );
};

export default About;
