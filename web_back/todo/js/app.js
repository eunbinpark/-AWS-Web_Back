window.onload = () => {
    AsideEvent.getInstance().addEventShowMenuButton();
    InformationService.getInstance().loadInfo();
    AsideEvent.getInstance().addEventMainChange();
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventAboutMeModifyClick();
    InformationEvent.getInstance().addEventAboutMeSaveClick();
    InformationEvent.getInstance().addEventIntroduceModifyClick();
    InformationEvent.getInstance().addEventIntroduceSaveClick();
    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
}