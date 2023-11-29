# Generated by Django 4.1.7 on 2023-11-28 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bill', '0003_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='invoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('party_GST', models.CharField(max_length=50)),
                ('date', models.CharField(max_length=20)),
                ('product_1', models.CharField(max_length=60)),
                ('rate_1', models.IntegerField()),
                ('quantity_1', models.IntegerField()),
                ('amount_1', models.IntegerField()),
                ('product_2', models.CharField(max_length=60)),
                ('rate_2', models.IntegerField()),
                ('quantity_2', models.IntegerField()),
                ('amount_2', models.IntegerField()),
                ('product_3', models.CharField(max_length=60)),
                ('rate_3', models.IntegerField()),
                ('quantity_3', models.IntegerField()),
                ('amount_3', models.IntegerField()),
                ('product_4', models.CharField(max_length=60)),
                ('rate_4', models.IntegerField()),
                ('quantity_4', models.IntegerField()),
                ('amount_4', models.IntegerField()),
                ('product_5', models.CharField(max_length=60)),
                ('rate_5', models.IntegerField()),
                ('quantity_5', models.IntegerField()),
                ('amount_5', models.IntegerField()),
                ('product_6', models.CharField(max_length=60)),
                ('rate_6', models.IntegerField()),
                ('quantity_6', models.IntegerField()),
                ('amount_6', models.IntegerField()),
                ('product_7', models.CharField(max_length=60)),
                ('rate_7', models.IntegerField()),
                ('quantity_7', models.IntegerField()),
                ('amount_7', models.IntegerField()),
                ('product_8', models.CharField(max_length=60)),
                ('rate_8', models.IntegerField()),
                ('quantity_8', models.IntegerField()),
                ('amount_8', models.IntegerField()),
                ('product_9', models.CharField(max_length=60)),
                ('rate_9', models.IntegerField()),
                ('quantity_9', models.IntegerField()),
                ('amount_9', models.IntegerField()),
                ('product_10', models.CharField(max_length=60)),
                ('rate_10', models.IntegerField()),
                ('quantity_10', models.IntegerField()),
                ('amount_10', models.IntegerField()),
                ('total_amount', models.IntegerField()),
                ('CGST', models.IntegerField()),
                ('SGST', models.IntegerField()),
                ('Round_gst', models.IntegerField()),
                ('Grand_Total', models.IntegerField()),
                ('numword', models.CharField(max_length=200)),
            ],
        ),
    ]