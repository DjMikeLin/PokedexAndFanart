# Generated by Django 2.2.2 on 2019-06-15 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon_app', '0010_auto_20190615_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fanart',
            name='file',
            field=models.ImageField(default='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', upload_to='user_images/'),
        ),
    ]