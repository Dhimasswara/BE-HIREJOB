const Pool = require('../config/db');

const selectAllPortfolio = (limit, offset, searchParam, sortBY, sort) => {
  return Pool.query(`SELECT * FROM portfolios WHERE name_portfolio LIKE '%${searchParam}%' ORDER BY ${sortBY} ${sort} LIMIT ${limit} OFFSET ${offset} `);
}

const showPortfolioByUserId = (id_worker) => {
  return Pool.query(`SELECT * FROM portfolios WHERE id_worker = '${id_worker}'`);
}

const selectPortfolio = (id) =>{
    return Pool.query(`SELECT * FROM portfolios WHERE id_portfolio='${id}'`);
}

const insertPortfolio = (data) => {
  const { id, name_portfolio, id_worker, repo_link, type_portfolio, image } = data;
  return Pool.query(`INSERT INTO portfolios (id_portfolio,id_worker,name_portfolio,repo_link,type_portfolio,image) VALUES('${id}','${id_worker}','${name_portfolio}','${repo_link}','${type_portfolio}','${image}')`);
}

const updatePortfolio = (data) =>{
  const { id, name_portfolio, id_worker, repo_link, type_portfolio, image } = data;
  return Pool.query(`UPDATE portfolios SET name_portfolio='${name_portfolio}', repo_link='${repo_link}', type_portfolio='${type_portfolio}', image='${image}' WHERE id_worker='${id_worker}' and id_portfolio='${id}'`);
}

const deletePortfolio = (id, id_worker) =>{
    return Pool.query(`DELETE FROM portfolios WHERE id_portfolio='${id}' and id_worker='${id_worker}'`);
}

const countData = () => {
  return Pool.query('SELECT COUNT(*) FROM portfolios')
}

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_portfolio FROM portfolios WHERE id_portfolio='${id}'`, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  )
}

const findName = (id_worker) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_worker FROM portfolios where id_worker='${id_worker}'`, (error, result) => {
      if (!error) {
        resolve(result)
      } else {
        reject(error)
      }
    })
  )
}

module.exports = {
  selectAllPortfolio,
  showPortfolioByUserId,
  findName,
  selectPortfolio,
  insertPortfolio,
  updatePortfolio,
  deletePortfolio,
  countData,
  findId
}