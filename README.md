## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|integer|null: false, foreign_key: true|
|mail|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
### Association
- has_many :groups
- has_many :group_users
  has_many :comments


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :group_users
  has_many :comments

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|user_name|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|
### Association
- has_many :users
- belongs_to :group
  has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|user_name|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
  has_many :group_users
