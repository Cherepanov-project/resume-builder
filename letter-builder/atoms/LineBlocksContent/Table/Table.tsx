const TableComponent = () => {
  return (
    <table
      style={{
        minWidth: "100%",
        borderCollapse: "collapse",
        border: "1px solid #D1D5DB",
      }}
    >
      <thead
        style={{
          backgroundColor: "#E5E7EB",
          color: "#374151",
          textAlign: "left",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
      >
        <tr>
          <th
            style={{
              width: "300px",
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
              textAlign: "center",
            }}
          >
            Заголовок
          </th>
          <th
            style={{
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
            }}
          ></th>
        </tr>
      </thead>
      <tbody
        style={{
          color: "#374151",
        }}
      >
        <tr>
          <td
            style={{
              width: "200px",
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
            }}
          >
            Параграф
          </td>
          <td
            style={{
              width: "400px",
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
            }}
          ></td>
        </tr>
        <tr>
          <td style={{ width: "200px", padding: "0.5rem", border: "1px solid #D1D5DB" }}>
            Параграф
          </td>
          <td
            style={{
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
            }}
          ></td>
        </tr>
        <tr>
          <td style={{ width: "200px", padding: "0.5rem", border: "1px solid #D1D5DB" }}>
            Параграф
          </td>
          <td
            style={{
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
            }}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
