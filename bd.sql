PGDMP                  	        {            proyecto_final    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    73811    proyecto_final    DATABASE     �   CREATE DATABASE proyecto_final WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE proyecto_final;
                postgres    false            �            1259    73827    producto    TABLE     �   CREATE TABLE public.producto (
    id_produto integer NOT NULL,
    id_usuarios integer,
    marca_producto character varying(25),
    nombre_producto character varying(25),
    nombre_usuario character varying(25)
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    73822    pulicaciones    TABLE     �   CREATE TABLE public.pulicaciones (
    id_publicacion integer NOT NULL,
    titulo character varying(25),
    precio integer,
    descripcion character varying(50),
    categoria character varying(50)
);
     DROP TABLE public.pulicaciones;
       public         heap    postgres    false            �            1259    73817    usuarios    TABLE     }   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(50),
    email character varying(50)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false                      0    73827    producto 
   TABLE DATA           l   COPY public.producto (id_produto, id_usuarios, marca_producto, nombre_producto, nombre_usuario) FROM stdin;
    public          postgres    false    216   �                 0    73822    pulicaciones 
   TABLE DATA           ^   COPY public.pulicaciones (id_publicacion, titulo, precio, descripcion, categoria) FROM stdin;
    public          postgres    false    215   �                  0    73817    usuarios 
   TABLE DATA           5   COPY public.usuarios (id, nombre, email) FROM stdin;
    public          postgres    false    214          q           2606    73831    producto producto_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_produto);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    216            o           2606    73826    pulicaciones pulicaciones_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.pulicaciones
    ADD CONSTRAINT pulicaciones_pkey PRIMARY KEY (id_publicacion);
 H   ALTER TABLE ONLY public.pulicaciones DROP CONSTRAINT pulicaciones_pkey;
       public            postgres    false    215            m           2606    73821    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    214                  x������ � �            x������ � �             x������ � �     