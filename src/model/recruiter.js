const Pool = require('../config/db');

const selectAllRecruiter = (limit, offset, searchParam,sortBY,sort) =>{
  return Pool.query(`SELECT * FROM recruiters WHERE name LIKE '%${searchParam}%' ORDER BY ${sortBY} ${sort} LIMIT ${limit} OFFSET ${offset} `);
}

const selectRecruiter = (id) =>{
    return Pool.query(`SELECT * FROM recruiters WHERE id_recruiter='${id}'`);
}

// const insertRecruiter = (data) =>{
//     const { id,name,phone,email,password,dob, role} = data;
//     return Pool.query(`INSERT INTO recruiters(id_recruiter,fullname,email,company_name,position,phone,job_field,city,description_company, instagram,linkedin, password) VALUES(${id},'${name}','${email}','${company_name}','${position}','${phone}','${job_field}','${city}','${description}','${instagram}','${linkedin}','${password}')`);
// }

const updateRecruiter = (data) =>{
    const { id,name,phone,position, job_field, city, description_company, instagram, linkedin, company_name, image, email} = data;
    return Pool.query(`UPDATE recruiters SET name='${name}',company_name='${company_name}',email='${email}',position='${position}',phone='${phone}',job_field='${job_field}',city='${city}',description_company='${description_company}', instagram='${instagram}',linkedin='${linkedin}', image='${image}' WHERE id_recruiter='${id}'`);
}

const deleteRecruiter = (id) =>{
    return Pool.query(`DELETE FROM recruiters WHERE id_recruiter='${id}'`);
}

const countData = () =>{
    return Pool.query('SELECT COUNT(*) FROM recruiters')
  }
  
const findId =(id)=>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT id_recruiter FROM recruiters WHERE id_recruiter='${id}'`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }

// AUTHENTICATION

const registerRecruiter = (data) => {
  const { id,name,phone,email,password,position , company_name, role} = data;
    
  return Pool.query(`INSERT INTO recruiters(id_recruiter,name,email,company_name,position,phone, password, role) VALUES('${id}','${name}','${email}','${company_name}','${position}','${phone}','${password}','${role}')`);
}


const findEmail = (email) => {
  return new Promise((resolve, reject) => {
      Pool.query(`SELECT * FROM recruiters WHERE email='${email}'`, (error, result) => {
          if (!error) {
              resolve(result);
          } else {
              reject(error);
          }
      });
  });
};

module.exports = {
    selectAllRecruiter,
    selectRecruiter,
    // insertRecruiter,
    updateRecruiter,
    deleteRecruiter,
    countData,
    findId,
    registerRecruiter,
    findEmail
}