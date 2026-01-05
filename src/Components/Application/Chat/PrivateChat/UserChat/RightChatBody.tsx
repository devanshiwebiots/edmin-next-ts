import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import {
  fetchChatMemberAsync,
  setChats,
  setSelectedUser,
} from "@/Redux/Reducers/ChatSlice";
import {
  AllMemberType,
  ChatsTypes,
  MessageTypes,
} from "@/Type/Application/Chat/ChatType";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import SendMessage from "./SendMessage";

const RightChatBody = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { allMembers, chats, selectedUser, currentUser } = useAppSelector(
    (state) => state.chat
  );
  const dispatch = useAppDispatch();

  /**
   * Sync selected chat and user once chats & members are available
   */
  const fetchChatAsync = useCallback(() => {
  if (!chats.length || !allMembers.length || !currentUser) return;

  const currentUserId = currentUser.id;

  const selectedUserId = chats[0].users.find(
    (x: number) => x !== currentUserId
  );

  const oneSelect = allMembers.find(
    (x: AllMemberType) => x.id === selectedUserId
  );

  if (oneSelect && !selectedUser) {
    dispatch(setSelectedUser(oneSelect));
  }
}, [chats, allMembers, currentUser, selectedUser, dispatch]);


  /**
   * Fetch chat members (runs once)
   */
  useEffect(() => {
    dispatch(fetchChatMemberAsync());
  }, [dispatch]);

  /**
   * Update selected chat when data changes
   */
  useEffect(() => {
    fetchChatAsync();
  }, [fetchChatAsync]);

  /**
   * Auto-scroll when messages change
   */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const selectedChat =
    allMembers && chats && selectedUser && currentUser
      ? chats.find(
          (x: ChatsTypes) =>
            x.users.includes(currentUser.id) &&
            x.users.includes(selectedUser.id)
        )
      : null;

  return (
    <div className="right-sidebar-Chats">
      <div className="msger">
        <div className="msger-chat">
          {selectedChat && selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((item: MessageTypes, id: number) => {
              const participators = allMembers.find(
                (x: AllMemberType) => x.id === item.sender
              );

              return (
                <div
                  className={`msg ${
                    item.sender === currentUser?.id ? "right" : "left"
                  }-msg`}
                  key={id}
                >
                  {item?.name ? (
                    <div className="msg-img" />
                  ) : (
                    <Image
                      width={30}
                      height={30}
                      src={`${ImagePath}/${participators?.image}`}
                      className="rounded-circle img-30 h-auto"
                      alt="user"
                      unoptimized
                    />
                  )}

                  <div className="msg-bubble mx-2">
                    <div className="msg-info">
                      <div className="msg-info-name">
                        {!item?.sender ? "Theresa Webb" : selectedUser?.name}
                      </div>
                      <div className="msg-info-time">{item.time}</div>
                    </div>
                    <div className="msg-text">{item.text}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <Image
            width={100}
            height={100}
              className="w-100"
              src={`${ImagePath}/start-conversion.jpg`}
              alt="start conversion"
              unoptimized
            />
          )}

          {/* scroll target */}
          <div ref={bottomRef} />
        </div>

        <SendMessage />
      </div>
    </div>
  );
};

export default RightChatBody;
