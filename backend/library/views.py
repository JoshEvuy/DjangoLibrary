from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookSerializer, CustomerSerializer, BookrentSerializer

#! INFO: Book ViewSet
class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer

    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(is_active=True)
        return self.get_serializer().Meta.model.objects.filter(id=pk,is_active=True).first()

    def list(self, request):
        _serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(_serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        _serializer = self.serializer_class(data=request.data)
        if _serializer.is_valid():
            _serializer.save()
            return Response(_serializer.data, status=status.HTTP_201_CREATED)
        return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        _query = self.get_queryset(pk)
        if _query:
            _query_serializer = BookSerializer(_query)
            return Response(_query_serializer.data, status=status.HTTP_200_OK)
        return Response({'message':'The requested book does not exist'}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            _serializer = self.serializer_class(self.get_queryset(pk), data=request.data)
            if _serializer.is_valid():
                _serializer.save()
                return Response(_serializer.data, status=status.HTTP_200_OK)
            return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        _query = self.get_queryset().filter(id=pk).first()
        if _query:
            _query.is_active = False
            _query.save()
            return Response({'message':'Book deleted successfully'}, status=status.HTTP_200_OK)
        return Response({'message':'Book not found'}, status=status.HTTP_400_BAD_REQUEST)

#! INFO: Customer ViewSet
class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer

    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(is_active=True)
        return self.get_serializer().Meta.model.objects.filter(id=pk,is_active=True).first()

    def list(self, request):
        _serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(_serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        _serializer = self.serializer_class(data=request.data)
        if _serializer.is_valid():
            _serializer.save()
            return Response(_serializer.data, status=status.HTTP_201_CREATED)
        return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        _query = self.get_queryset(pk)
        if _query:
            _query_serializer = CustomerSerializer(_query)
            return Response(_query_serializer.data, status=status.HTTP_200_OK)
        return Response({'message':'The requested customer does not exist'}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            _serializer = self.serializer_class(self.get_queryset(pk), data=request.data)
            if _serializer.is_valid():
                _serializer.save()
                return Response(_serializer.data, status=status.HTTP_200_OK)
            return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        _query = self.get_queryset().filter(id=pk).first()
        if _query:
            _query.is_active = False
            _query.save()
            return Response({'message':'Customer deleted successfully'}, status=status.HTTP_200_OK)
        return Response({'message':'Customer not found'}, status=status.HTTP_400_BAD_REQUEST)

#! INFO: BookRent ViewSet
class BookrentViewSet(viewsets.ModelViewSet):
    serializer_class = BookrentSerializer

    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.all()
        return self.get_serializer().Meta.model.objects.filter(id=pk).first()

    def list(self, request):
        _serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(_serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        _serializer = self.serializer_class(data=request.data)
        if _serializer.is_valid():
            _serializer.save()
            return Response(_serializer.data, status=status.HTTP_201_CREATED)
        return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        _query = self.get_queryset(pk)
        if _query:
            _query_serializer = BookrentSerializer(_query)
            return Response(_query_serializer.data, status=status.HTTP_200_OK)
        return Response({'message':'The requested bookrent does not exist'}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            _serializer = self.serializer_class(self.get_queryset(pk), data=request.data)
            if _serializer.is_valid():
                _serializer.save()
                return Response(_serializer.data, status=status.HTTP_200_OK)
            return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

