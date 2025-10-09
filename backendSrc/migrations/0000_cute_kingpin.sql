CREATE TABLE `posts_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL
);

CREATE TABLE `templates_table` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `content` text NOT NULL
);