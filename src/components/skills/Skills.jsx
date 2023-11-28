import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProgressBar from "../../utils/progressBar";
import TablePagination from '@mui/material/TablePagination';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  
function createData(name, bgcolor, completed) {
    return { name, bgcolor, completed };
}
  
const rows = [
    createData('HTML5',"rgb(228, 77, 38)", 95 ),
    createData('CSS3', "rgb(21, 114, 182)", 88 ),
    createData('Bootstrap', "rgb(86, 61, 124)", 90 ),
    createData('SASS', "rgb(21, 114, 182)", 74 ),
    createData('Material UI', "#3b82f680", 84 ),
    createData('JavaScript', "rgb(240, 217, 31)", 90 ),
    createData('ReactJs and Redux', "rgb(8 126 164)", 79),
    createData('VueJs and Vuex', "rgb(66, 184, 131)", 70),
    createData('Postman', "rgb(255, 108, 55)", 65),
    createData('RestAPI/JSON', "#C46210", 80),
    createData('Git and Github', "black", 90),
    createData('Azure Devops', "#CD9575", 49),
    createData('Swagger Documentation', "#63db2a", 49),
    createData('NodeJs and ExpressJs', "#4B6F44", 60),
    createData('SQL and MongoDB', "#54626F", 65),
];

const Skills = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };

  return (
    <div id="skills">
        <Container
            sx={{
                marginTop: '50px',
                textAlign: 'center'
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    margin: '0 auto',
                    padding: '10px 0'
                }}
            >
                Web Development Stack
            </Typography>

            <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Tech Skills</StyledTableCell>
                            <StyledTableCell align="center">Experience Level</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <StyledTableRow key={row.name}>
                                
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <ProgressBar bgcolor={row.bgcolor} completed={row.completed} />
                                </StyledTableCell>
                                
                            </StyledTableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                              select: {
                                'aria-label': 'rows per page',
                              },
                              actions: {
                                showFirstButton: true,
                                showLastButton: true,
                              },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    </div>
  )
}

export default Skills