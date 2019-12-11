const { BigQuery } = require('@google-cloud/bigquery');
// import { BigQuery } from '@google-cloud/bigquery';
const bigquery = new BigQuery();

async function query(comparison, startDate, endDate) {
  const query = `SELECT * 
  FROM \`gdelt-bq\`.gdeltv2.gkg 
  WHERE V2Organizations like '%${comparison}%' 
  and DATE > ${startDate}
  and DATE < ${endDate} 
  LIMIT 10`;

  const options = {
    query: query,
    location: 'US',
  }

  const [rows] = await bigquery.query(query, { location: 'US', });

  // const [rows] = await job.getQueryResults();

  console.log('Rows:');
  // rows.forEach(row => console.log(row))
  return rows;
}


export async function get(req, res, next) {
  const results = await query();

  if (results.length > 0) {

    var r = JSON.stringify(results, null, 2);
    console.log(r);
    res.end()
  }
  else {
    console.log('Nothin')
    next();
  }
}