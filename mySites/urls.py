"""定义learning_logs的URL模式"""

from django.urls import re_path, path

from . import views

urlpatterns = [
    # 主页
    re_path(r'^$', views.index, name='index'),
    re_path(r'login$', views.login, name='login'),
]

