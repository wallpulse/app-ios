//
//  TwitterNativeBridge.h
//  wallpulse
//
//  Created by Christoph Witzko on 02.05.15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"
#import "RCTRootView.h"

#import <Social/Social.h>
#import <Accounts/Accounts.h>
#import <Foundation/Foundation.h>
#import <TwitterKit/TwitterKit.h>

@interface TwitterNativeBridge : NSObject<RCTBridgeModule>

@end
