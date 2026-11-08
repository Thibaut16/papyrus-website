CREATE DATABASE IF NOT EXISTS papyrus_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE papyrus_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  cycle ENUM('first', 'second') NOT NULL,
  category ENUM('general', 'commercial', 'industrial') NOT NULL
);

CREATE TABLE programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slug VARCHAR(150) UNIQUE NOT NULL,
  code VARCHAR(20),
  cycle ENUM('first', 'second') NOT NULL,
  category ENUM('commercial', 'industrial') NOT NULL,
  description TEXT,
  objectives TEXT,
  skills TEXT,
  careers TEXT
);

CREATE TABLE tuition_fees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  class_id INT,
  category ENUM('general', 'commercial', 'industrial') NOT NULL,
  registration_fee INT NOT NULL,
  tranche1 INT NOT NULL,
  tranche2 INT NOT NULL,
  tranche3 INT NOT NULL,
  total INT NOT NULL,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE TABLE admissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  class_applied VARCHAR(50),
  message TEXT,
  status ENUM('pending', 'reviewed', 'accepted', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150),
  category VARCHAR(100),
  image_url VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(30),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE school_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT
);

-- Admin par défaut (mot de passe : Admin@2026)
INSERT INTO users (name, email, password, role) VALUES
('Directrice Papyrus', 'admin@papyrus.cm', '$2b$10$rQZ8K9YxN5mW3pL7vT2uOeJ6hF1sC4dA8bG0kM9nP2qR5tU7wX3yZ', 'admin');

INSERT INTO school_settings (setting_key, setting_value) VALUES
('school_name', 'PAPYRUS Bilingual High School'),
('address', 'B.P. 8190, Douala – Cameroun'),
('phone1', '+237 695 878 931'),
('phone2', '+237 683 180 095'),
('email', 'contact@papyrus.cm');