import * as React from 'react';
import { DataGrid,  } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function CustomTable({rows,columns,height=600}) {


const paginationModel = { page: 0, pageSize: 10 };

return (
  <>
  <Paper sx={{ height: height, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[10, 20]}
      checkboxSelection
      sx={{
        border: 0,
        '& .MuiDataGrid-cell': {
          borderRight: '1px solid rgba(224, 224, 224, 1)',
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          lineHeight: 'normal',
          py:1,
        },
        '& .MuiDataGrid-columnHeaders': {
          borderRight: '2px solid rgba(224, 224, 224, 1)',
        },


      }}
    />
  </Paper>

  </>
);

}
