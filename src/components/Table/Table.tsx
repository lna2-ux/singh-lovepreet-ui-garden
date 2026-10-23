import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTableWrapper = styled.div<{ disabled?: boolean }>`
  overflow-x: auto;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
  text-align: left;
`;

const StyledTh = styled.th`
  background-color: #007bff;
  color: #ffffff;
  padding: 12px;
  border: 1px solid #dddddd;
`;

const StyledTd = styled.td`
  padding: 10px 12px;
  border: 1px solid #dddddd;
  color: #333333;
`;

export const Table: React.FC<TableProps> = ({ columns, data, disabled }) => {
  return (
    <StyledTableWrapper disabled={disabled}>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <StyledTh key={index}>{col.header}</StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <StyledTd key={colIndex}>{row[col.accessor]}</StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};