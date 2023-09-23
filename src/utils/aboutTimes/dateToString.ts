export function timeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  // 두 날짜간의 경과 시간을 초로 계산
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (hours < 24) {
    // 24시간 이내
    return `${Math.floor(hours)}시간 전`;
  } else if (days < 7) {
    // 1주일 이내
    return `${Math.floor(days)}일 전`;
  } else {
    // 1주일 초과
    const year = date.getFullYear();
    // 월은 0부터 시작하므로 1을 더함
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }
}
