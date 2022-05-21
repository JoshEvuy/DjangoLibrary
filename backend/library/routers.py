from rest_framework.routers import DefaultRouter
from .views import BookViewSet, CustomerViewSet, BookrentViewSet

router = DefaultRouter()

router.register(r'books', BookViewSet, basename='books')
router.register(r'customers', CustomerViewSet, basename='customers')
router.register(r'bookrents', BookrentViewSet, basename='bookrents')

urlpatterns = router.urls