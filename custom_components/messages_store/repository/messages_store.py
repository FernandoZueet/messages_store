from abc import ABC, abstractmethod
from typing import Optional, List

class MessagesStore(ABC):
    @abstractmethod
    def create_table(self):
        pass

    @abstractmethod
    def insert_message(self, slug: str, message: str):
        pass

    @abstractmethod
    def slug_exists(self, slug: str) -> bool:
        pass

    @abstractmethod
    def retrieve_message(self, slug: str) -> Optional[str]:
        pass

    @abstractmethod
    def delete_message(self, slug: str) -> bool:
        pass

    @abstractmethod
    def update_message(self, slug: str, new_message: str) -> bool:
        pass

    @abstractmethod
    def retrieve_all_messages(self) -> List[dict]:
        pass

    @abstractmethod
    def get_by_slug(self, slug: str) -> Optional[dict]:
        pass
