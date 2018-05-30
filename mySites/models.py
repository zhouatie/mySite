# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.

class User(models.Model):
    """用户账号"""
    account = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.account
