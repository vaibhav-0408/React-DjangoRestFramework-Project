from django.urls import path
from menuapi import views
urlpatterns=[
    path('order/',views.orderlist.as_view(),name='order-list'),
    path('order/<int:id>/',views.OrderDetail.as_view(),name='order-detail')
]