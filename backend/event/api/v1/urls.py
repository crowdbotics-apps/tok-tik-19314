from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VendorViewSet,
    LocationViewSet,
    FavoritesViewSet,
    VendorDetailViewSet,
    CategoryViewSet,
    FaqViewSet,
    PresenterViewSet,
    ScheduleViewSet,
    MyScheduleViewSet,
    SponsorViewSet,
)

router = DefaultRouter()
router.register("faq", FaqViewSet)
router.register("vendor", VendorViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("sponsor", SponsorViewSet)
router.register("presenter", PresenterViewSet)
router.register("location", LocationViewSet)
router.register("schedule", ScheduleViewSet)
router.register("category", CategoryViewSet)
router.register("favorites", FavoritesViewSet)
router.register("vendordetail", VendorDetailViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
