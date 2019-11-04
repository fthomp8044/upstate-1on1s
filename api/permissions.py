from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # read permission requests are allowed anyone
        if request.method in permissions.SAFE_METHODS:
            return True

        # write permission requests are only allowed to the owner
        return obj.user == request.user
