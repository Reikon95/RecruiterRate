import React from 'react';
import Table from 'react-bootstrap/Table'
export default function AgencyPricing() {
    return (
        <>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Cost Per Month per Profile</th>
      <th>Saving from Individual Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>£9</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>2-5</td>
      <td>£8.10</td>
      <td>10%</td>
    </tr>
    <tr>
      <td>6-10</td>
      <td>£7.65</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>11-20</td>
      <td>£7</td>
      <td>22%</td>
    </tr>
    <tr>
      <td>21-50</td>
      <td>£6.30</td>
      <td>30%</td>
    </tr>
    <tr>
      <td>51-100</td>
      <td>£4.95</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>101+</td>
      <td>N/A</td>
      <td>CONTACT US</td>
    </tr>
  </tbody>
</Table>

        </>
    )
}