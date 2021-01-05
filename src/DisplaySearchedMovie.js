import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class DisplaySearchedMovie extends React.Component {
    render(){
        if (!this.props.Movie) return null
        return(
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Nominate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {this.props.Movie.map(ele=>(
                    <TableRow>
                <TableCell align="right">{ele.Title}</TableCell>
                <TableCell align="right">{ele.Year}</TableCell>
                <TableCell align="right"><button 
                // onClick={()=>saveToNomi(ele)} 
                    >Nominate</button></TableCell>
                <TableCell align="right">
                </TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        )
    }
}
export default DisplaySearchedMovie;