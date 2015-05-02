//
//  TwitterNativeBridge.m
//  wallpulse
//
//  Created by Christoph Witzko on 02.05.15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "TwitterNativeBridge.h"

@implementation TwitterNativeBridge
  RCT_EXPORT_MODULE();

  RCT_EXPORT_METHOD(getToken:(RCTResponseSenderBlock)callback)
  {
    ACAccountStore *account = [[ACAccountStore alloc] init];
    ACAccountType *accountType = [account accountTypeWithAccountTypeIdentifier:ACAccountTypeIdentifierTwitter];
    dispatch_async(dispatch_get_main_queue(), ^{
      [account requestAccessToAccountsWithType:accountType options:nil completion:^(BOOL granted, NSError *error){
        [[Twitter sharedInstance] logInWithCompletion:^
         (TWTRSession *session, NSError *error) {
           if (session) {
             callback(@[[NSNull null], session.userID, session.userName, session.authToken, session.authTokenSecret]);
           } else {
             callback(@[error.localizedDescription]);
           }
         }];
      }];
    });
  }
@end
