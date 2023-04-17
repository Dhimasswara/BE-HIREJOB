const Pool = require('../config/db');

const selectAllExperience = (limit, offset, searchParam, sortBY, sort) => {
  return Pool.query(`SELECT * FROM experiences WHERE company_name LIKE '%${searchParam}%' ORDER BY ${sortBY} ${sort} LIMIT ${limit} OFFSET ${offset} `);
}

const showExperienceByUserId = (id_worker) => {
  return Pool.query(`SELECT * FROM experiences WHERE id_worker = '${id_worker}'`);
}

const selectExperience = (id) =>{
    return Pool.query(`SELECT * FROM experiences WHERE id_experience='${id}'`);
}

const insertExperience = (data) => {
  const { id, id_worker, company_name, jobdesk, date_start, date_end, description, image } = data;
  return Pool.query(`INSERT INTO experiences (id_experience,id_worker,jobdesk,company_name,date_start,date_end,description,image) VALUES('${id}','${id_worker}','${jobdesk}','${company_name}','${date_start}','${date_end}','${description}', '${image}')`);
}

const updateExperience = (data) =>{
  const { id, id_worker, company, jobdesk, startdate, enddate, description  } = data;
  return Pool.query(`UPDATE experiences SET company_name='${company}', jobdesk='${jobdesk}', date_start='${startdate}', date_end='${enddate}', description='${description}' WHERE id_worker='${id_worker}' and id_experience='${id}'`);
}

const deleteExperience = (id, id_worker) =>{
    return Pool.query(`DELETE FROM experiences WHERE id_experience='${id}' and id_worker='${id_worker}'`);
}

const countData = () => {
  return Pool.query('SELECT COUNT(*) FROM experiences')
}

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_experience FROM experiences WHERE id_experience='${id}'`, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  )
}

// const findName = (name, id_worker) => {
//   return new Promise((resolve, reject) =>
//     Pool.query(`SELECT * FROM experiences where id_worker='${id_worker}' and name_portfolio ILIKE '%${name}%'`, (error, result) => {
//       if (!error) {
//         resolve(result)
//       } else {
//         reject(error)
//       }
//     })
//   )
// }

module.exports = {
  selectAllExperience,
  showExperienceByUserId,
  // findName,
  selectExperience,
  insertExperience,
  updateExperience,
  deleteExperience,
  countData,
  findId
}