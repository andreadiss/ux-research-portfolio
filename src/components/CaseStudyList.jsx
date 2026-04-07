function CaseStudyList({ items }) {
  return (
    <section>
      <h2>Case studies</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Outcome</th>
              <th scope="col">Stage</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.id}-row`}>
                <td>{item.title}</td>
                <td>{item.outcome}</td>
                <td>{item.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CaseStudyList
