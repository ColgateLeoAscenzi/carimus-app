--
-- PostgreSQL database dump
--

-- Dumped from database version 10.15
-- Dumped by pg_dump version 10.15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: workerinfo; Type: TABLE; Schema: public; Owner: my_user
--

CREATE TABLE public.workerinfo (
    id integer NOT NULL,
    name character varying(30),
    "position" character varying(200),
    description text,
    image_link character varying(200)
);


ALTER TABLE public.workerinfo OWNER TO my_user;

--
-- Name: workerinfo_id_seq; Type: SEQUENCE; Schema: public; Owner: my_user
--

CREATE SEQUENCE public.workerinfo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.workerinfo_id_seq OWNER TO my_user;

--
-- Name: workerinfo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: my_user
--

ALTER SEQUENCE public.workerinfo_id_seq OWNED BY public.workerinfo.id;


--
-- Name: workerinfo id; Type: DEFAULT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.workerinfo ALTER COLUMN id SET DEFAULT nextval('public.workerinfo_id_seq'::regclass);


--
-- Data for Name: workerinfo; Type: TABLE DATA; Schema: public; Owner: my_user
--

COPY public.workerinfo (id, name, "position", description, image_link) FROM stdin;
1	Tony Pease	FOUNDER & CEO	Tony is originally from Herndon, VA, and served as a Nuclear Machinist Mate in the United States Navy for six years. He and his wife, Anita, were stationed in Hawaii from 1997 to 2003 and relocated to Raleigh after their service. Tony attended N.C. State University, receiving a degree in Mechanical Engineering. Prior to founding Carimus, Tony served as a key member of the ownership teams responsible for building two technology firms, both with successful exits. As the Founder and CEO of Carimus, Tony uses his 15 years of experience as a technology executive to help build, brand, and maintain new software applications. His goal, with the help of the partners at Carimus, is to make charitable engagement part of everyday life with GoodBookey. GoodBookey is our sports-based betting application where financial reward is redirected to participating nonprofits. Tony\\’s superpower is his ability to simplify complicated things. Outside of work, he loves to spend time with his family, enjoys running, and surfing.	https://carimus.com/wp-content/uploads/2020/04/tony.png
\.


--
-- Name: workerinfo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: my_user
--

SELECT pg_catalog.setval('public.workerinfo_id_seq', 1, true);


--
-- Name: workerinfo workerinfo_pkey; Type: CONSTRAINT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.workerinfo
    ADD CONSTRAINT workerinfo_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

