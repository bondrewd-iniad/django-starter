# セットアップ

```sh
$ python -m venv venv
$ venv\\Scripts\\activate # Win
$ . venv/bin/activate # Mac
$ pip install -r requirements.txt
```

# アプリ追加

```sh
$ python manage.py startapp <app_name>
```

`config/settings.py` の `INSTALLED_APPS` 配列に `'<app_name>',` を追記

# サーバー起動

```sh
$ python manage.py runserver
```

http://localhost:8000 をChromeで開く

# サーバー停止

```
Ctrl + C
```

# パッケージインストール後

```sh
$ pip freeze > requirements.txt
```
