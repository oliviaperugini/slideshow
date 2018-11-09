CREATE TABLE ss_titles (
  title_id int(10) unsigned not null auto_increment primary key,
  ss_slide_id int(10) unsigned not null,
  title_align varchar(255),
  title_bold tinyint(1),
  title_italics tinyint(1),
  title_underline tinyint(1),
  title_font_size tinyint(3) unsigned,
  title_font varchar(255),

  FOREIGN KEY fk_slide_id(ss_slide_id)
  REFERENCES ss_slide(id)

);

ALTER TABLE ss_titles MODIFY title_italics tinyint(1) unsigned default 0 not null;
ALTER TABLE ss_titles MODIFY title_bold tinyint(1) unsigned default 0 not null;
ALTER TABLE ss_titles MODIFY title_underline tinyint(1) unsigned default 0 not null;
ALTER TABLE ss_titles MODIFY title_font_size tinyint(3) unsigned default 12 not null;
ALTER TABLE ss_titles MODIFY title_align varchar(255) default 'left' not null;

ALTER TABLE ss_titles ADD CONSTRAINT chk_val CHECK (title_align in('left', 'center', 'right'));
ALTER TABLE ss_titles MODIFY title_font varchar(255) default 'times new roman' not null;
