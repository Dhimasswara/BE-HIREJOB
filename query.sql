-- ----------------------------------------
-- -- TABLE WORKER --
-- ----------------------------------------

create table workers (
    id_worker varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    password varchar(255) not null,
    jobdesk varchar(255),
    description text,
    address varchar(255),
    workplace varchar(255),
    role varchar(255)
    image varchar(255)
)

create table skills (
    id_skill varchar(255) primary key,
    name_skill varchar(255) not null,
    id_worker varchar(255),
    CONSTRAINT fk_worker FOREIGN KEY (id_worker) REFERENCES workers(id_worker) ON UPDATE CASCADE ON DELETE CASCADE
)

create table portfolio (
    id_portfolio varchar(255) primary key,
    name_portfolio varchar(255) not null,
    image varchar(255),
    repo_link varchar(255),
    type_portfolio varchar(255),
    id_worker varchar(255),
    CONSTRAINT fk_worker FOREIGN KEY (id_worker) REFERENCES workers(id_worker) ON UPDATE CASCADE ON DELETE CASCADE
)

create table experiences (
    id_experience varchar(255) primary key,
    id_worker varchar(255),
    jobdesk varchar(255),
    company_name varchar(80),
    date_start varchar(20),
    date_end varchar(20),
    description text,
    image varchar(255),
    CONSTRAINT fk_worker FOREIGN KEY (id_worker) REFERENCES workers(id_worker) ON UPDATE CASCADE ON DELETE CASCADE
)    
    



create table recruiters (
    id_recruiter varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    company_name varchar(255) ,
    position varchar(255),
    job_field varchar(255),
    city varchar(255),
    description_company text,
    instagram varchar(255),
    phone varchar(255) not null,
    linkedin varchar(255),
    password varchar(255) not null,
    role varchar(255)
    image varchar(255)
)





select workers.*, skills.*, portfolios.* from workers inner join skills on workers.id_worker = skills.id_worker inner join portfolios on workers.id_worker = portfolios.id_worker;

select workers.id_worker, workers.name, workers.email, workers.phone, workers.jobdesk, workers.description, workers.address, workers.workplace , skills.name_skill , portfolios.name_portfolio, portfolios.repo_link, portfolios.type_portfolio , experiences.company_name, experiences.jobdesk, experiences.date_start, experiences.date_end, experiences.description experiences_ from workers left join skills on workers.id_worker = skills.id_worker left join portfolios on workers.id_worker = portfolios.id_worker left join experiences on workers.id_worker=experiences.id_worker where workers.id_worker='fd8386bd-52b6-4320-bdb0-126d313eb055'
