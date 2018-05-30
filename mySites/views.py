from django.shortcuts import render
from .models import User
from django.http import HttpResponseRedirect, Http404, request, JsonResponse
import json
from django.views.decorators.http import require_http_methods

# Create your views here.
def index(request):
    response = {}
    response['msg'] = 'success'
    response['error_num'] = 0

    return JsonResponse(response)

@require_http_methods(['POST'])
def login(request):
    response = {}

    req = json.loads(request.body)
    # user = User(**req)
    # a = user.save()
    if req['account'] == '':
        response['error_num'] = 1
        response['msg'] = '账号不能为空'
        return JsonResponse(response)
    else:
        data = User.objects.filter(account=req['account']).first()

    if req['password'] == '':
        response['code'] = 1
        response['msg'] = '密码不能为空'
        return JsonResponse(response)
    # if req['account']
    print(data)
    if req['password'] == data.password:
        response['code'] = 0
        response['msg'] = '登录成功'
    else:
        response['code'] = 1
        response['msg'] = '密码错误'

    return JsonResponse(response)