const Pool = require('../config/db');

const selectAllWorker = (limit, offset, searchParam,sortBY,sort) =>{
  // select workers.*, skills.name from workers inner join skills on workers.id_worker=skills.id_worker
  return Pool.query(`SELECT * FROM workers WHERE name LIKE '%${searchParam}%' ORDER BY ${sortBY} ${sort} LIMIT ${limit} OFFSET ${offset} `);
}

const selectWorker = (id) =>{
    return Pool.query(`SELECT * FROM workers WHERE id_worker='${id}'`);
}

const selectAllValueWorker = (id) =>{
  return Pool.query(`select workers.id_worker, workers.name, workers.email, workers.phone, workers.jobdesk, workers.description, workers.address, workers.workplace , skills.name_skill , portfolios.name_portfolio, portfolios.repo_link, portfolios.type_portfolio , experiences.company_name, experiences.jobdesk, experiences.date_start, experiences.date_end, experiences.description experiences_ from workers left join skills on workers.id_worker = skills.id_worker left join portfolios on workers.id_worker = portfolios.id_worker left join experiences on workers.id_worker=experiences.id_worker where workers.id_worker='${id}'`);
}

// const insertRecruiter = (data) =>{
//     const { id,name,phone,email,password,dob, role} = data;
//     return Pool.query(`INSERT INTO recruiters(id_recruiter,fullname,email,company_name,position,phone,job_field,city,description_company, instagram,linkedin, password) VALUES(${id},'${name}','${email}','${company_name}','${position}','${phone}','${job_field}','${city}','${description}','${instagram}','${linkedin}','${password}')`);
// }

const updateWorker = (data) =>{
    const { id,name,phone,jobdesk, address, workplace, description, image} = data;
    return Pool.query(`UPDATE workers SET name='${name}',jobdesk='${jobdesk}',description='${description}',address='${address}',workplace='${workplace}' , image='${image}' WHERE id_worker='${id}'`);
}

const deleteWorker = (id) =>{
    return Pool.query(`DELETE FROM workers WHERE id_worker='${id}'`);
}

const countData = () =>{
    return Pool.query('SELECT COUNT(*) FROM workers')
  }
  
const findId =(id)=>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT id_worker FROM workers WHERE id_worker='${id}'`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }

// AUTHENTICATION

const registerWorker = (data) => {
  const { id,name,phone,email,password, role} = data;
    
  return Pool.query(`INSERT INTO workers(id_worker,name,email,phone,password,role) VALUES('${id}','${name}','${email}','${phone}','${password}','${role}')`);
}

const findEmail = (email) => {
  return new Promise((resolve, reject) => {
      Pool.query(`SELECT * FROM workers WHERE email='${email}'`, (error, result) => {
          if (!error) {
              resolve(result);
          } else {
              reject(error);
          }
      });
  });
};

module.exports = {
    selectAllWorker,
    selectWorker,
    selectAllValueWorker,
    updateWorker,
    deleteWorker,
    countData,
    findId,
    registerWorker,
    findEmail
}
