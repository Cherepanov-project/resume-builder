CREATE TABLE `posts_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL
);

CREATE TABLE templates_table (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL
);