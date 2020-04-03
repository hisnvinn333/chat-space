## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false|
|mail|string|index: true, null: false, unique: true|
### Association
- has_many :groups,though: :group_users
  has_many :comments
  has_many :group_users


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
### Association
- has_many :users,though: :group_users
  has_many :comments
  has_many :group_users


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

