## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true , unique: true|
### Association
- has_many :groups,though: :group_users
  has_many :comments


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
### Association
- has_many :users,though: :group_users
  has_many :comments

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- belongs_to :group


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
|text|text|
### Association
- belongs_to :user
- belongs_to :group

